package geowebrest

import grails.converters.*
import geowebrest.User
import geowebrest.Pin
import org.springframework.transaction.annotation.*

class PinController {

    def pins() {
    	log.info "render pin info"
    	render Pin.list() as JSON
    }

    @Transactional
	def save(Pin pin) {
		pin.save flush:true
  	}

    def user() {
    	log.info "render user info"
    	render User.list() as JSON
    }
}
