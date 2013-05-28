(ns motb.api.posts
  (require [somnium.congomongo :as mongo])
  (use [compojure.core :only [defroutes GET POST PUT DELETE]]
       [ring.util.response :only [response status]]
       [ring.middleware.session :only [wrap-session]]
       [motb.auth :only [unauth-response wrap-auth]]
       [motb.util]))

(defn- str-id-and-timestamp [data]
  (str-mongoid (generate-timestamp data)))

(defn str->num [s] 
  (let [n (read-string s)]
    (when (number? n) n))) 

(defn posts-list [request] 
  "Return a list of posts title as well as date info."
  (let [params (:route-params request)
        from (:from params "0")
        num (:num params "0")]
    (response 
      (map str-id-and-timestamp 
           (mongo/fetch :posts 
                        :only [:_id :name] 
                        :limit (str->num num)
                        :skip (str->num from)
                        :sort {:_id -1})))))

(defn count-post [request]
  (response {:count (mongo/fetch-count :posts)}))

(defn post [request] 
  (let [params (:route-params request)
        raw-id (:id params)
        obj-id (mongo/object-id raw-id)]
    (response 
      (str-mongoid 
        (generate-timestamp 
          (mongo/fetch-by-id :posts obj-id))))))

(defn new-post [request] 
  (let [params (:json-params request)]
    (if (mongo/insert! :posts params)
      (response {"msg" "successfully add new post"})
      (response "you dumbass"))))

(defn update-post [request] 
  (let [params (:json-params request)
        _id (mongo/object-id (params "_id"))]
    (if (mongo/fetch-and-modify :posts {:_id _id} (dissoc params "_id"))
      (response {"msg" "successfully update post"})
      (response "You dumbass!"))))

(defn delete-post [request] 
  (let [params (:route-params request)
        raw-id (:id params)
        obj-id (mongo/object-id raw-id)
        ret (mongo/destroy! :posts {:_id obj-id})]
    (if (= (.getN ret) 1)
      (response {"msg" "correct"})
      (response "You dumbass!"))))

(defroutes posts-routes
  (GET "/posts" [] posts-list)
  (GET "/posts/count", [] count-post)
  (GET "/posts/from:from/num:num" [fr n] posts-list)
  (GET "/posts/:id" [id] post)
  (POST "/posts" [] (wrap-auth new-post))
  (PUT "/posts/:id" [] (wrap-auth update-post))
  (DELETE "/posts/:id" [] (wrap-auth delete-post)))
