let btn=document.getElementById("add-Course");
let modal_bg=document.getElementsByClassName("modal-bg")[0];
let close=document.querySelector(".modal-head p")
let submit=document.getElementById("submit");
btn.onclick=function(){
	modal_bg.style.visibility="visible";
	document.getElementById("name").value="";
	document.getElementById("description").value="";
	document.getElementById("image").value="";
}

close.onclick=function(){
	modal_bg.style.visibility="hidden";
}

let details=[];

submit.onclick=function(){
	let name=document.getElementById("name").value;
	let description=document.getElementById("description").value;
	let image=document.getElementById("image");
	let storage=window.localStorage
	
	if(name=="" || description==""){
		alert("Every fields are mandadory");
	}
	else{
		if(storage!=undefined){
			let obj={}
			obj["name"]=name;
			obj["description"]=description;
			obj["image"]=image.value;
			details.push(obj);
			localStorage.setItem('info',JSON.stringify(details));
			modal_bg.style.visibility="hidden";
			let current=details[details.length-1];
			if (current!=null){
				let div1=document.createElement("div");
				let div2=document.createElement("div");
				let div3=document.createElement("div");
				let p1=document.createElement("p");
				let p2=document.createElement("p");
				let p3=document.createElement("p");
				let filereader=new FileReader();
				filereader.onload=function(event){
					let img=document.createElement("img");
					img.src=event.target.result;
					p3.appendChild(img)
				}
				filereader.readAsDataURL(image.files[0]);
				
				p1.innerText="Course Name : "+current.name;
				p2.innerText="Description : "+current.description;
				
				div1.appendChild(p1);
				div1.appendChild(p2);
				div2.appendChild(p3);
				div3.appendChild(div1);
				div3.appendChild(div2);
				div3.className="info-1";
				div1.className="info-2";
				document.getElementsByClassName("info")[0].appendChild(div3);
				document.getElementsByClassName("info")[0].appendChild(document.createElement("br"));
			}
		}
	}
	

}