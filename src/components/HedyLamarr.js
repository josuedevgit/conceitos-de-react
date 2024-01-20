function HedyLamarr() {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
    imageRadius: 50,
  };

  return (
    <div>
        <h1>{user.name}</h1>
        <img 
            src={user.imageUrl}
            alt={"Photo of " + user.name}
            style={{
            width: user.imageSize,
            height: user.imageSize,
            borderRadius: user.imageRadius + "%"
            }}
        />
    </div>
  )

}

export default HedyLamarr;