(ns motb.api
  (use [ring.middleware.json :only [wrap-json-params 
                                    wrap-json-response]]
       [compojure.core :only [routes context]]
       [motb.api.users :only [users-routes]]
       [motb.api.posts :only [posts-routes]]))

(def api-routes 
  (->
    (context "/api" [] (routes users-routes
                               posts-routes))
    wrap-json-params
    wrap-json-response))

