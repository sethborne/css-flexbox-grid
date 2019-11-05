let checkbox = document.getElementById('toggleEdgeVisibility');

let colOfEdges = document.getElementsByClassName('edge');

// console.log('chk: ', checkbox)
// console.log('colOfEdge: ', colOfEdges)

function handleCheck(event){
  // console.log('event: ', event)
  for(let i = 0; i < colOfEdges.length; i += 1){
    if(event.target.checked){
    // if the checkbox is checked, then iterate the edges and add the style.
    // const styleEdge = `border-left: 1px solid lightgrey; border-right: 1px solid lightgrey;`
    const styleEdge = `border-left: 1px solid red; border-right: 1px solid red;`
      colOfEdges[i].setAttribute('style', styleEdge)
    } else {
      colOfEdges[i].setAttribute('style', '')
    }
  }
}

checkbox.addEventListener('click', handleCheck)