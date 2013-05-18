(ns motb.api.users
  (use [compojure.core :only [defroutes GET POST]]
       [ring.util.response :only [response status]]
       [ring.middleware.session :only [wrap-session]]
       [motb.auth :only [unauth-response wrap-auth]]))

(defn tmphandler [request]
  {:status 200
   :body "hello"})

(defn- valid-login? [request]
  (let [params (:json-params request)
        uname (params "username")
        passwd (params "password")]
    (if (= "ming" uname passwd)
      true
      false)))

(defn- valid-login-handler [request]
  {:status 200
   :body "success"
   :session {:login true}})

(defn- invalid-login-handler [request]
  (unauth-response "Username or password is wrong"))

(defn login [request]
  (if valid-login?
    (valid-login-handler request)
    (invalid-login-handler request)))

(defn checkLogin [request]
  (response {"login" "success"}))

(defroutes users-routes
  (GET "/users/login" [] (wrap-auth checkLogin))
  (POST "/users/login" [] login))
