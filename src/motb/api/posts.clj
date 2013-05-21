(ns motb.api.posts
  (require [somnium.congomongo :as mongo])
  (use [compojure.core :only [defroutes GET POST PUT DELETE]]
       [ring.util.response :only [response status]]
       [ring.middleware.session :only [wrap-session]]
       [motb.auth :only [unauth-response wrap-auth]]
       [motb.util]))

(defn posts-list [request] 
  "Return a list of posts title as well as date info."
  (response (map str-mongoid (map generate-timestamp (mongo/fetch :posts)))))

(defn post [request] 
  (let [params (:route-params request)
        raw-id (:id params)
        obj-id (mongo/object-id raw-id)]
    (response (str-mongoid (mongo/fetch-by-id :posts obj-id)))))

(defn new-post [request] {})
(defn update-post [request] {})

(defn delete-post [request] 
  (println request)
  (let [params (:route-params request)
        raw-id (:id params)
        obj-id (mongo/object-id raw-id)
        ret (mongo/destroy! :posts {:_id obj-id})]
    (if (= (.getN ret) 1)
      (response {"msg" "correct"})
      (response "You dumbass!"))))

(defroutes posts-routes
  (GET "/posts" [] posts-list)
  (GET "/posts/:id" [id] post)
  (POST "/posts" [] (wrap-auth new-post))
  (PUT "/posts/:id" [] (wrap-auth update-post))
  (DELETE "/posts/:id" [] (wrap-auth delete-post)))
