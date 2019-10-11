console.log("page loading")
$(document).on("click",".toEat",function(event){
console.log("click button")
    event.preventDefault()
var burgerInfo = {
    id: $(this).val()
}

$.ajax({
    method: "PUT",
    url: "/update/"+ burgerInfo.id,
    data: burgerInfo
}).then(function(data){
location.reload()
})

})