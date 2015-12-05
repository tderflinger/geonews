package geowebrest

import grails.rest.*

class Pin {

    int id

    String url

    String tags

    BigDecimal latitude

    BigDecimal longitude

    String description

    String title

    String copyright

    //User user

    static constraints = {
    }
}
