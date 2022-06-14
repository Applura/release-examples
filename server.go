package main

import (
	"io"
	"log"
	"net/http"
	"os"
)

func main() {
	http.Handle("/", serveFile("_testdata/home.json"))
	http.Handle("/home", serveFile("_testdata/home.json"))
	http.Handle("/articles", serveFile("_testdata/articles.json"))
	http.Handle("/articles/article1", serveFile("_testdata/article1.json"))
	http.Handle("/articles/article2", serveFile("_testdata/article2.json"))
	http.Handle("/articles/article3", serveFile("_testdata/article3.json"))
	http.Handle("/about", serveFile("_testdata/page1.json"))
	log.Fatal(http.ListenAndServe(":5050", nil))
}

func serveFile(path string) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("access-control-allow-origin", r.Header.Get("origin"))
		w.Header().Set("access-control-allow-credentials", "true")
		w.Header().Set("content-type", "application/vnd.api+json")
		f, _ := os.Open(path)
		_, err := io.Copy(w, f)
		if err != nil {
			log.Fatal("failed to read json")
		}
	})
}
