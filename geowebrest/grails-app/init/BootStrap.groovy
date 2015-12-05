import geowebrest.User
import geowebrest.Pin

class BootStrap {

    def init = { servletContext ->

        def user1 = new User(surname: "Tommy", name: "Tester").save()
        def user2 = new User(surname: "Rudger", name: "Tester").save()

        def pin1 = new Pin(url:"http://www.google.de", latitude: new BigDecimal("13.222"), longitude: new BigDecimal("33.44"), tags:"Travel", description:"Beschreibugn", title:"Title", copyright:"byme").save()
        def pin2 = new Pin(url:"http://www.google2.de", latitude: new BigDecimal("13.222"), longitude: new BigDecimal("33.44"), tags:"Music", description:"Beschreibugn 2", title:"Title 2", copyright:"todo").save()

    }

    def destroy = {
    }
}
