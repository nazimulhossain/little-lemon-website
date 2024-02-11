function Star({size}){

    const newArr = new Array(size);
    newArr.fill(6);

    return (
        <div className="star">
            {
                  newArr.map((el,i)=>{
                    return (
                        <div key={i}><ion-icon name="star"></ion-icon></div>
                    )
                })
            }
        </div>
    )

  
    

    
}

export default Star;