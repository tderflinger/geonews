class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/users"(controller:"pin", action:"user")
        "/pins"(controller:"pin", action:"pins")
        "/pinspost"(controller:"pin", action:"save", method:"POST")

        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
