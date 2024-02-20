function ImageCard(props) {
  const { url } = props;
  return (
    <>
      <div className="hover:opacity-60 hover:scale-95 hover:cursor-pointer w-96 h-80">
        <img src={url} className=" h-full w-full" />
      </div>
    </>
  );
}

export default ImageCard;
