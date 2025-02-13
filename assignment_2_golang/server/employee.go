package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Employee struct {
	Id          string
	Name        string
	Designation string
	Technology  string
	Salary      int
	Commission  int
	Phone       int
}

func readAllEmployees(c *gin.Context) {
	employees := []Employee{
		{Id: "1001", Name: "AMAN",
			Designation: "SWE", Technology: "MERN",
			Salary:     100000,
			Commission: 15000, Phone: 9999999999},
		{Id: "1002", Name: "AJAY",
			Designation: "ML ENGINEER", Technology: "PYTHON",
			Salary:     18000,
			Commission: 15000, Phone: 8888888888},
	}
	c.JSON(http.StatusOK, employees)
}
func readEmployeeById(c *gin.Context) {
	id := c.Param("id")
	employee := Employee{Id: id, Name: "AMAN",
		Designation: "SWE", Technology: "MERN",
		Salary:     100000,
		Commission: 15000, Phone: 9999999999}
	c.JSON(http.StatusOK, employee)
}
func createEmployee(c *gin.Context) {
	var jbodyEmployee Employee
	err := c.BindJSON(&jbodyEmployee)
	if err != nil {
		c.JSON(http.StatusInternalServerError,
			gin.H{"error": "Server Error." + err.Error()})
		return
	}
	createdEmployee := Employee{Id: "1001", Name: "AMAN",
		Designation: "SWE", Technology: "MERN",
		Salary:     100000,
		Commission: 15000, Phone: 9999999999}
	c.JSON(http.StatusCreated,
		gin.H{"message": "Employee details Created Successfully.",
			"flight": createdEmployee})
}

func updateEmployee(c *gin.Context) {
	id := c.Param("id") //
	var jbodyEmployee Employee
	err := c.BindJSON(&jbodyEmployee)
	if err != nil {
		c.JSON(http.StatusInternalServerError,
			gin.H{"error": "Server Error." + err.Error()})
		return
	}
	updatedEmployee := Employee{Id: id, Name: "AMAN",
		Designation: "SWE", Technology: "MERN",
		Salary:     100000,
		Commission: 15000, Phone: 9999999999}
	c.JSON(http.StatusOK,
		gin.H{"message": "Employee Details Updated Successfully.", //
			"employee": updatedEmployee}) //
}
func deleteEmployee(c *gin.Context) {
	//id := c.Param("id")
	c.JSON(http.StatusOK,
		gin.H{"message": "Employee Details Deleted Successfully."})
}
func main() {
	//router
	r := gin.Default()
	//routes | API Endpoints
	r.GET("/employees", readAllEmployees)
	r.GET("/employees/:id", readEmployeeById)
	r.POST("/employees", createEmployee)
	r.PUT("/employees/:id", updateEmployee)
	r.DELETE("/employees/:id", deleteEmployee)
	//server
	r.Run(":8080")
}
