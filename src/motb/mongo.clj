(ns motb.mongo
  (:use [somnium.congomongo]))

(defonce conn
  (make-connection "motb"
                   :host "localhost"
                   :port 27017))

(defn init-mongo []
  (set-connection! conn))

