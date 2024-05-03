function scrollWin() {
    scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}


// // dlidar-----
{// let next = document.getElementById("next");getElementById
    // let al_img = document.getElementById("al_img");
    // let g_photo = document.querySelector(".g_photo");

    // {
    //     let img_aray = [
    //         `     <img  src="imgs/9.jpeg" class="slidar">
    // `,
    //         `     <img  src="imgs/4.jpeg" class="slidar">
    // `,
    //         `     <img  src="imgs/11.jpeg" class="slidar">
    // `,
    //         `     <img  src="imgs/12.jpg" class="slidar">
    // `,
    //         `     <img  src="imgs/14.jpg" class="slidar">
    // `,
    //     ];
    //     next.addEventListener("click", () => {
    //         let random = Math.floor(Math.random() * img_aray.length);

    //         g_photo.innerHTML = img_aray[random];
    //     });
    // }
}
// ------------

function xx() {
    let mony = document.getElementById("mony");
    let marct = document.querySelectorAll(".marct");
    let total = 0;
    marct.forEach((itme) => {
        let ppe = Number(
            itme.getElementsByTagName("p")[0].innerText.replace("$", "")
        );
        console.log();
        let ppp = Number(itme.getElementsByClassName("valuo")[0].value);
        total = total + ppp * ppe;
    });
    mony.innerHTML = `${total} $`;
}

{
    let te = document.getElementById("te");
    te.addEventListener("change", () => {
        xx();
    });
}


{
    let prpr = document.getElementById("prpr");
    let too_brodact = document.querySelector(".too_brodact");
    let prodact = document.getElementById("prodact");
    let btn1 = document.querySelectorAll(".btn1");

    btn1.forEach((eo) => {
        eo.addEventListener("click", () => {
            eo.setAttribute("disabled", "disabled");

            eo.innerHTML = `&#10003 Done`;
            eo.style.backgroundColor = "blue";
            eo.style.color = "white";
            prpr.style.opacity = '1'
            prpr.innerText = parseInt(prpr.innerText) + 1


            let phot = eo.parentElement.parentElement.getElementsByClassName("Avatar")[0].src;

            let num = eo.parentElement.parentElement.getElementsByTagName("b")[0].innerText;

            let price = eo.parentElement.parentElement.getElementsByTagName("p")[1].innerText;

            let add = `
      <div class="nn">
      <div class="marct">
        <img src="${phot}" class="ms-2" style="width: 100px;height: 100px;">
        <div class="vv">
        <b class="fw-bold">${num}</b>
        <p class="fs-5 mx-2 fw-bold">${price}</p>
        <input type="number" value="1" min="1" class="valuo">

        <button type="button" class="pere" id="remove"><i class="fa-solid fa-trash"></i></button>
</div>
</div>

  `;
            too_brodact.innerHTML += add;
            xx();
        });
    });
}



{
    // open
    let open = document.getElementById("open");
    open.addEventListener("click", () => {
        prodact.style.display = "block";
    });

    //cloos 
    let cloos = document.getElementById("cloos");
    prodact.addEventListener("click", (eo) => {
        if (eo.target.classList == "clos") {
            prodact.style.display = "none";
        }
    });

}


// remove
{
    prodact.addEventListener("click", (eo) => {
        if (eo.target.classList == "pere") {
            eo.target.parentElement.parentElement.remove();
            prpr.innerText = parseInt(prpr.innerText) - 1

            xx();


            // 
            let nameprodact =
                eo.target.parentElement.getElementsByClassName("ttt")[0].innerText;

            let galry = document.querySelectorAll(".card");

            galry.forEach((eo) => {
                let sss = eo.getElementsByClassName("ddd")[0].innerText;
                if (nameprodact == sss) {
                    let done = eo.getElementsByClassName("btn1")[0];
                    done.removeAttribute("disabled");
                    done.style.backgroundColor = "#04aa6d";
                    done.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
                }
            });
        }
    });

}

// ----------

{
    let Avatar = document.querySelectorAll(".Avatar");
    let allprodact = document.querySelector(".allprodact");

    Avatar.forEach(eo => {
        eo.addEventListener("click", () => {

            let photo = eo.parentElement.getElementsByClassName("Avatar")[0].src
            let titl = eo.parentElement.getElementsByTagName("b")[0].innerText;
            let title = eo.parentElement.getElementsByTagName("p")[0].innerText;
            let pp = eo.parentElement.getElementsByTagName("p")[1].innerText;
            let xx = `
            <div class="allprodact row mx-0">

            <div class="prodact_2 col-12 col-sm-6" style="margin-top: 150px;">
                 <img src="${photo}" class="img_2">
               </div>
               <div class="ms-3 mb-5 col-12 col-sm-5" style="margin-top: 150px;">
                <p class="text-secondary w-75 fs-4">${title}</p>
                 <h5 class="card-title fs-2 my-4 fw-bold">${titl}</h5>
                 <p class="w-50 fs-4 fw-bold text-danger">Price : ${pp}</p>
                 <a class="aaa" href="index.html"> << Back </a>

               </div>
           </div>

`
            allprodact.innerHTML = xx
            allprodact.style.display = "block"

        })
    });


}
