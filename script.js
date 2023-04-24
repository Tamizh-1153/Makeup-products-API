const container=document.createElement('div')
container.classList='container'
document.body.appendChild(container)

const heading=document.createElement('h1')
heading.classList='text-center mb-3 title'
heading.setAttribute('id','title')
heading.textContent='Makeup products from heroku API'
container.appendChild(heading)

const input=document.createElement('input')
input.setAttribute('placeholder','Search for products...')
input.classList='input w-50'
container.appendChild(input)

const inputButton=document.createElement('button')
inputButton.textContent='Search'
inputButton.classList='inputButton mt-3'
container.appendChild(inputButton)

const tags=document.createElement('div')
tags.classList='mt-2 mb-4'
container.appendChild(tags)

const all=document.createElement('button')
all.textContent='All'
all.classList='mx-2 mb-2'
tags.appendChild(all)

const lips=document.createElement('button')
lips.textContent='Lips'
lips.classList='mx-2 mb-2'
tags.appendChild(lips)

const eyes=document.createElement('button')
eyes.textContent='Eyes'
eyes.classList='mx-2 mb-2'
tags.appendChild(eyes)

const foundation=document.createElement('button')
foundation.textContent='Foundation'
foundation.classList='mx-2 mb-2'
tags.appendChild(foundation)

const primer=document.createElement('button')
primer.textContent='Primer'
primer.classList='mx-2 mb-2'
tags.appendChild(primer)

const mascara=document.createElement('button')
mascara.textContent='Mascara'
mascara.classList='mx-2 mb-2'
tags.appendChild(mascara)

const concealer=document.createElement('button')
concealer.textContent='Concealer'
concealer.classList='mx-2 mb-2'
tags.appendChild(concealer)

const shadowPalette=document.createElement('button')
shadowPalette.textContent='Shadow palette'
shadowPalette.classList='mx-2 mb-2'
tags.appendChild(shadowPalette)

const row=document.createElement('div')
row.classList='row'
container.appendChild(row)

async function fetchData() {
    try {
      const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
      const data = await response.json()

      for(let i=0;i<Object.keys(data).length;i++){
        const column=document.createElement('div')
        column.classList='col-sm-6 col-md-4 col-lg-4 col-xl-4 my-3'
        row.appendChild(column)

        const card=document.createElement('div')
        card.classList='card h-100 border-0 '
        column.appendChild(card)

        const imageDiv=document.createElement('div')
        imageDiv.classList='image'
        card.appendChild(imageDiv)
        const image=document.createElement('img')
        image.classList=' pImage'
        image.setAttribute('alt','Image Unavailable')
        imageDiv.appendChild(image)

        const cardBody=document.createElement('div')
        cardBody.classList='card-body text-center '
        card.appendChild(cardBody)

        const cardText1=document.createElement('div')
        cardText1.classList=' product_name mt-0'
        cardBody.appendChild(cardText1)

        const cardText2=document.createElement('div')
        cardText2.classList=' product_brand '
        cardBody.appendChild(cardText2)

        const priceText=document.createElement('div')
        priceText.classList='priceText mt-2'
        cardBody.appendChild(priceText)

        const cardText=document.createElement('div')
        cardText.classList='card-text'
        cardText.style.whiteSpace='pre-wrap'
        cardBody.appendChild(cardText)

        const productImage=data[i]['image_link']
        image.src=productImage
        
        const productName=data[i]['name']
        cardText1.textContent=productName

        const brand=data[i]['brand']
        cardText2.textContent='Brand- '+brand
     
        const price=data[i]['price']
        const priceSign=data[i]['price_sign']
        priceText.textContent=priceSign+price

        const description=data[i]['description']
        cardText.textContent=description

        const productLink=data[i]['product_link']
        const productLinkDiv=document.createElement('div')
        productLinkDiv.classList='mt-3'
        cardBody.appendChild(productLinkDiv)
        const link=document.createElement('a')
        link.classList='productLink'
        productLinkDiv.appendChild(link)
        link.setAttribute('href',productLink)
        link.textContent='\nProduct Link'

        inputButton.addEventListener('click',()=>{
          const filter=input.value.toLowerCase()
          if(productName.toLowerCase().indexOf(filter)>-1){
            column.style.display=''
            card.style.display=''
          }else{
            column.style.display='none'
            card.style.display='none'
          }
        })

        lips.addEventListener('click',()=>{
            const lipsFilter='lip'
            if(productName.toLowerCase().indexOf(lipsFilter)>-1){
              column.style.display=''
            card.style.display=''
          }else{
            column.style.display='none'
            card.style.display='none'
            }
        })

        eyes.addEventListener('click',()=>{
            const eyesFilter='eye'
            if(productName.toLowerCase().indexOf(eyesFilter)>-1){
              column.style.display=''
            card.style.display=''
          }else{
            column.style.display='none'
            card.style.display='none'
            }
        })

        foundation.addEventListener('click',()=>{
            const foundationFilter='foundation'
            if(productName.toLowerCase().indexOf(foundationFilter)>-1){
              column.style.display=''
              card.style.display=''
            }else{
              column.style.display='none'
              card.style.display='none'   
        }})

        primer.addEventListener('click',()=>{
            const primerFilter='primer'
            if(productName.toLowerCase().indexOf(primerFilter)>-1){
              column.style.display=''
              card.style.display=''
            }else{
              column.style.display='none'
              card.style.display='none'   
        }})

        mascara.addEventListener('click',()=>{
            const mascaraFilter='mascara'
            if(productName.toLowerCase().indexOf(mascaraFilter)>-1){
              column.style.display=''
              card.style.display=''
            }else{
              column.style.display='none'
              card.style.display='none'   
        }})

        concealer.addEventListener('click',()=>{
            const concealerFilter='concealer'
            if(productName.toLowerCase().indexOf(concealerFilter)>-1){
              column.style.display=''
              card.style.display=''
            }else{
              column.style.display='none'
              card.style.display='none'   
        }})

        shadowPalette.addEventListener('click',()=>{
            const shadowPaletteFilter='shadow palette'
            if(productName.toLowerCase().indexOf(shadowPaletteFilter)>-1){
              column.style.display=''
              card.style.display=''
            }else{
              column.style.display='none'
              card.style.display='none'   
        }})

        all.addEventListener('click',()=>{
              column.style.display=''
              card.style.display=''
        })
      } 
    } catch (error) {
      console.log(error);
    }
  }
fetchData()



