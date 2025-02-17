package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Flight struct {
	Id            string  `json:"id"`
	Number        string  `json:"number"`
	Airlinenumber string  `json:"airline_number"`
	Source        string  `json:"source"`
	Destenation   string  `json:"destination"`
	Capacity      int     `json:"capacity"`
	Price         float32 `json:"price"`
}

func readallFlightById(c *gin.Context) {
	id := c.Param("id")
	flight := Flight{
		Id: id, Number: "aib123", Airlinenumber: "321", Source: "delhi", Destenation: "bangloare", Capacity: 123, Price: 123.321,
	}

	c.JSON(http.StatusOK, flight)
}

func createFlight(c *gin.Context) {
	var jbodyFlight Flight
	arr := c.BindJSON(&jbodyFlight)
	if arr != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server Error." + arr.Error()})
		return
	}
	createdFlight := Flight{
		Id: "3484", Number: "aib123", Airlinenumber: "321", Source: "delhi", Destenation: "bangloare", Capacity: 123, Price: 123.321,
	}
	c.JSON(http.StatusCreated, gin.H{"message": "Flight created successfully.", "flight": createdFlight})
}
func updateFlight(c *gin.Context) {
	id := c.Param("id")
	var jbodyFlight Flight
	arr := c.BindJSON(&jbodyFlight)
	if arr != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server Error." + arr.Error()})
		return
	}
	updatedFlight := Flight{
		Id: id, Number: "aib123", Airlinenumber: "321", Source: "delhi", Destenation: "bangloare", Capacity: 123, Price: 123.321,
	}
	c.JSON(http.StatusOK, gin.H{"message": "Flight updated successfully.", "flight": updatedFlight})
}
func deleteFlight(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Flight deteled successfully."})
}

func main() {
	r := gin.Default()
	r.GET("/flight", readallFlightById)
	r.GET("/flight/:id", readallFlightById)
	r.POST("/flight", createFlight)
	r.PUT("/flight/:id", updateFlight)
	r.DELETE("/flight/:id", deleteFlight)
	r.Run(":8080")

}
