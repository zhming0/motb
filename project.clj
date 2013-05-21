(defproject motb "0.1.0-SNAPSHOT"
  :description "A personal tiny blog for Ming."
  :url "https://github.com/mjzshd/motb"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [ring/ring-core "1.1.8"]
                 [ring/ring-jetty-adapter "1.1.8"]
                 [ring/ring-json "0.2.0"]
                 [compojure "1.1.5"]
                 [org.clojure/tools.trace "0.7.5"]
                 [congomongo "0.4.1"]
                 [commons-codec/commons-codec "1.8"]]
  :plugins [[lein-ring "0.8.5"]]
  :main motb.core
  :ring {:handler motb.core/app
         :init motb.mongo/init-mongo})
