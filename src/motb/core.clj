(ns motb.core
  (:use [ring.adapter.jetty :only (run-jetty)]
        [compojure.core :only [defroutes routes GET]]
        [compojure.route :only [not-found resources]]))

(defroutes app 
  (GET "/hello/:foo" {{foo :foo} :params}
    (str "Foo = " foo))
  (resources "")
  (not-found "Are you kidding me? "))

;(def server (run-jetty #'app {:port 8080 :join? false}))
