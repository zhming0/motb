(ns motb.api.users
  (use [compojure.core :only [defroutes GET POST]]
       [ring.util.response :only [response status]]
       [motb.auth :only [unauth-response]]))

(defn tmphandler [request]
  {:status 200
   :body "hello"})

(defn login [request]
  (let [params (:json-params request)
        uname (params "username")
        passwd (params "password")]
    (if (= "ming" uname passwd)
      (response {:msg "good"})
      (unauth-response "Username or password is wrong"))))

(defn checkLogin [request]
  (status (response "You need to login") 401))

(defroutes users-routes
  (GET "/users/login" [] checkLogin)
  (POST "/users/login" [] login))
