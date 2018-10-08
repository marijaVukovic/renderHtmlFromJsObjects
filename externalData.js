var data = [
	{
	 img: "petprofilepic.png",
	 name: "Petar",
	 lastname: "Petrovic",
     post: "lorem ipsum dolor amet",
   	 posted: 7,
	 permission: "public"
	},
	{
	 img: "profile2.png",
	 name: "John",
	 lastname: "Smith",
         post: "lorem ipsum dolor amet",
   	 posted: 7,
	 permission: "public"
	},
	{
	 img: "female-profile-img.jpg",
	 name: "Tricia",
	 lastname: "Teahan",
         post: "lorem ipsum dolor amet",
   	 posted: 7,
	 permission: "public"
	},
	{
	 img: "petprofilepic.png",
	 name: "Marko",
	 lastname: "Nikolic",
         post: "lorem ipsum dolor amet<br><img src='images/htmlcss.png'/>",
   	 posted: 7,
	 permission: "public"
	}
]

function loadData() {
    var content = "";

    for (x in data) {
        content = content +
            "<div class='row'>" + 
            "<img src='" + data[x].img + "'/>" +
            "<span id='fullName'>"+data[x].name +" " + data[x].lastname + 
            "</span>"+
            "<div id='postTxt'>"+ data[x].post +"</div>"+
            "<br><div id='like'>Like Comment</div>"+
            "</div>";
    }

    document.getElementById("printText").innerHTML += content;
}

loadData();