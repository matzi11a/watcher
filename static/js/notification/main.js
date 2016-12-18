$(document).ready(function () {

    $("span.dismiss").click(function(){
        $this = $(this)
        index = $this.attr("index")

        $li = $('li[index='+index+']')
        remove_notif(index)

        $li.animate({
            height: 0,
            opacity: 0,
            "margin-top": "0px",
            "margin-bottom": "0px",
            "padding-top": "0px",
            "padding-bottom": "0px"
            }, 300, function(){

                $li.remove();
        });

    });

    /* any anchor.button */
    $("a.button").click(function(e){
        $this = $(this);
        index = $this.attr("index");

        remove_notif(index);

        if($this.attr("href") == "/update_now"){
            $.post("/update_now", {"mode": "set_true"})
            .done(function(){
                window.location = "/update";
            });
        } else {

            window.open = ($this.attr("href"), '_blank');
        }

        e.preventDefault();
    });


    /* sends post to remove notification from list */
    function remove_notif(index){
        $.post("/notification_remove", {
            "index": index
        })
    }


});