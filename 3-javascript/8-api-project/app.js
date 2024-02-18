const BaseUrlApi  = 'https://jsonplaceholder.typicode.com/posts';
const tbody = document.querySelector("#todos-listing")
const CreatePostPopup = document.querySelector("#create-post-form")
const TitleInput = document.querySelector("#post_title");
const BodyInput = document.querySelector("#post_body");
const editPostPopup = document.querySelector("#edit-post-form");
const edit_Post_Title = document.querySelector("#edit_post_title");
const edit_Post_Body = document.querySelector("#edit_post_body");
const EditId = document.querySelector("#edit_post_id");
const Loader = document.querySelector(".loader-container");

CreatePostPopup.addEventListener("submit",(event) => {
  event.preventDefault();
  const titleValue = TitleInput?.value;
  const bodyValue = BodyInput?.value;
  const btnSubmit = document.querySelector("#create-post-form button");


  if( TitleInput?.value == ""|| BodyInput?.value =="" ){
    alert("OOPSY! plz Fill this & without fill not submit.")
    TitleInput.value = "";
    BodyInput.value = "" ;
    return;
  }

  const body = {
    title : titleValue,
    body : bodyValue,
  }

  btnSubmit.setAttribute("disabled","disabled");
  Loader.style.display = "flex";

  fetch(BaseUrlApi,{
    method : "POST",
    headers:{
      "Content-Type" : "application/json" ,
    },
    body : JSON.stringify(body),
  }).then(async (reponse) => {
    const jsonData = await reponse.json();
    TitleInput.value = "";
    BodyInput.value = "" ;
    btnSubmit.removeAttribute("disabled");
    $("#create-post").modal("hide");
    await getPost();
    Loader.style.display = "none";
  }).catch((error) =>{
    alert(" something went wrong.")
    btnSubmit.removeAttribute("disabled");
    Loader.style.display = "none";
    console.error(error,"error")
  });
});

editPostPopup.addEventListener("submit",(e)=>{
  e.preventDefault();
  const editTitleValue = edit_Post_Title?.value;
  const editBodyValue = edit_Post_Body?.value;
  const EditPostId = EditId?.value;
  if(!editTitleValue || !EditPostId ||!editBodyValue){
    alert("Plzz Fill This Edit Form.")
    return;
  }

  const body = {
    title : editTitleValue,
    body : editBodyValue,
    id : EditPostId,
  }
  Loader.style.display = "flex";

  fetch(`${BaseUrlApi}/${EditPostId}`,{
    method: "PUT",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(body)
  }).then(async (data) => {
    // const JsonData = await data.json();
    
    await getPost();
    $("#edit-post").modal("hide")
    Loader.style.display = "none";
  })

});

const EditWork = (postId) => {
  return fetch(`${BaseUrlApi}/${postId}`)
  .then((data)=> data.json())
  .then((data) =>{
    return data;
  })
  .catch((error)=>console.error)
}

const getPost = () => {
  Loader.style.display = "flex";
  return(fetch(BaseUrlApi)
.then((Response) => Response.json()).then((data) =>{
    let output = ""
    data?.forEach((singleRow) => {
        output += `<tr>
        <td>${singleRow?.id}</td>
        <td>${singleRow?.userId}</td>
        <td>${singleRow?.title}</td>
        <td><a class="btn btn-primary edit-btn"  href="#edit-post" data-post-id="${singleRow?.id}" >Edit</a></td>
        <td><a href="#" class="btn btn-danger delete-btn" data-post-id="${singleRow.id}">Delete</a></td>
      </tr>`;
      tbody.innerHTML = output;
      Loader.style.display = "none";
    });
})
.catch((error) => {
  console.error(error);
  Loader.style.display = "none";
}))};
getPost();

tbody.addEventListener("click", async (event) =>{
  event.preventDefault();
  const CurrentElement = event.target
  if(CurrentElement.classList.contains("delete-btn") && confirm("Are You Syre")){
    const SelectDeleteAtt = CurrentElement.getAttribute("data-post-id");
    console.warn("deleted!")
    Loader.style.display = "flex";
    fetch(`${BaseUrlApi}/${SelectDeleteAtt}`,{
      method : "DELETE",
    }).then( async(data) =>{
      const DataJson = await data.json();
      Loader.style.display = "none";
      await getPost()
    }).catch((error) => console.error(alert("oopsy")))
  }

  if(CurrentElement.classList.contains("edit-btn")){
    const postId = CurrentElement.getAttribute("data-post-id");
    Loader.style.display = "flex";
    const singleWork = await EditWork(postId);
    $("#edit-post").modal("show")
    Loader.style.display = "none";

    edit_Post_Title.value = singleWork.title;
    edit_Post_Body.value = singleWork.body;
    EditId.value = singleWork.id;
  }
});



/*  
Rest Api Pattern

Request Methods

GET	    /posts              (get all posts)
GET	    /posts/1            (get post by id)
GET	    /comments?postId=1  (get post comments by postId)
POST	  /posts              (create post)
PUT	    /posts/1            (update specific post with all data like title,body)
PATCH	  /posts/1            (update specific post partially with some data like only title or body)
DELETE  /posts/1            (delete post by id)

*/