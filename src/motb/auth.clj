(ns motb.auth
  (:use [ring.middleware.session :only [wrap-session]]
        [ring.util.response :only [response status]]))

(defn- auth [request]
  (let [ss (:session request {})]
    (if (= (:login ss) true)
      true
      false)))

(defn unauth-response [body] 
  (status (response body) 401))

(defn unauth-handler [request]
  {:status 401
   :headers {"Content-Type" "text/html"}
   :body "Login please!"})

(defn wrap-auth [handler & option] 
  (-> (fn [request] 
         (if (auth request) 
           (handler request)
           (unauth-handler request)))))

