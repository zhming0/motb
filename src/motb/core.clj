(ns motb.core
  (:use [ring.adapter.jetty :only (run-jetty)]
        [compojure.core :only [defroutes routes GET]]
        [compojure.route :only [not-found resources]]
        [compojure.handler :only [site]]
        [ring.util.response :only [resource-response]]))

(defroutes main-routes 
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (resources "/")
  (not-found "Page not found"))

(def app
  (-> (site main-routes)))

;(def server (run-jetty #'app {:port 8080 :join? false}))
