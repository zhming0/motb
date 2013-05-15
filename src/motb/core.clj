(ns motb.core
  (:require [ring.util.response :as response])
  (:use [ring.adapter.jetty :only (run-jetty)]
        [compojure.core :only [defroutes routes GET]]
        [compojure.route :only [not-found resources]]
        [compojure.handler :only [site]]
        [ring.util.response :only [resource-response]]))

(defn- str-str [s]
  (str "\"" s "\""))

(defn callback-response [body]
  (response/response (str "<script>" body "</script>")))

(defn push-state-redirect [request]
  (callback-response (str "window.location = " 
                          (str-str "http://") 
                          "+" "window.location.host + " 
                          (str-str (str "#" (subs (:uri request) 1))))))

(defroutes main-routes 
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (GET "/blog*" [] push-state-redirect)
  (GET "/login" [] push-state-redirect)
  (GET "/admin*" [] push-state-redirect)
  (resources "/")
  (not-found "Page not found"))

(def app
  (-> (site main-routes)))

;(def server (run-jetty #'app {:port 8080 :join? false}))
