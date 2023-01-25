let button = document.getElementById("btn")

button.addEventListener("click", () => {
    $.ajax({
        url:"https://swapi.dev/api/vehicles/20",
        type: "GET",
        success:function(data) {
            $("#vehicleName").text(data.name);
            $("#model").text(data.model);
            $("#manufacturer").text(data.manufacturer);
            $("#crew").text(data.crew);
            $("#passengers").text(data.passengers);
            $("#class").text(data.vehicle_class);
        }
    })
})