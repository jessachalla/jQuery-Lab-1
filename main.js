$(() => {
    let savedRes;

    $(".available").on("click", makeRes);
    function makeRes() {
        if ($(this).hasClass('reserved')) {
            return;
        } 
        else {
        let number = $(this).text();
        savedRes = $(this);

        //Floor plan disappears
        $("#floorPlan").css("display", "none");
        
        //The reservation form appears
        $("#form").css("display", "block");
        
        //The table number updates in the form
        $("#tableNumber").text(number);
        }
    }

    $("#saveButton").on("click", saveRes);
    function saveRes() {
        
        //Floor plan appears
        $("#floorPlan").css("display", "flex");
        
        //The reservation form goes away
        $("#form").css("display", "none");

        savedRes.removeClass("available");
        savedRes.addClass("reserved");
    }

    $('#x').on("click", exit);
    function exit(){
        //Floor plan appears
        $("#floorPlan").css("display", "flex");
        
        //The reservation form goes away
        $("#form").css("display", "none");
    }

})
