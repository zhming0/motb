(ns motb.util
  (:use [somnium.congomongo :only [object-id get-timestamp]]
        [ring.util.codec :only [base64-encode
                                base64-decode]])
  (:import (org.apache.commons.codec.binary Base64)))

(defn encodeBase64 [s]
  (Base64/encodeBase64String (.getBytes s)))

(defn decodeBase64 [s]
  (String. (Base64/decodeBase64 s) "UTF-8"))

(defn- fn-mongoid [f mp]
  (assoc mp :_id (f (:_id mp))))

(defn str-mongoid [mp]
  (fn-mongoid str mp))

(defn objectid-mongoid [mp]
  (fn-mongoid object-id mp))

(defn base64-mongoid [mp] 
  (fn-mongoid encodeBase64 mp))

(defn base64-decode-mongoid [mp] 
  (fn-mongoid decodeBase64 mp))

(defn generate-timestamp [mp]
  (assoc mp :time (get-timestamp (:_id mp))))
