const { handleFollow } = require("./handle-follow");
const { handleMessage } = require("./handle-message");



// event handler
exports.handleEvent = async (event) => {
  // console.log(event.message.type);
  switch (event.type) {
    case "message":
      switch (event.message.type) {
        case "text":
          await handleMessage(event);
          break;
        case "image":
          console.log("image message");
          break;
        case "location":
          console.log("location message");
          break;
        case "sticker":
          console.log("sticker message");
          break;
        default:
          throw new Error(
            "Unknown message " + JSON.stringify(event.message.type)
          );
      }
      break;
    case "postback":
      console.log("postback");
      break;
    case "follow":
        handleFollow(event);
      break;
    case "unfollow":
      console.log('มีคน block / เลิกเป็นเพื่อนแล้ว')
      break;
    default:
      throw new Error("Unknown event " + JSON.stringify(event));
  }
};
