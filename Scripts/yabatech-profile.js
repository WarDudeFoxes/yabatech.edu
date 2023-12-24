import { profileController } from "./utils/profile-controller.js";
import { genProfileHTML } from "./utils/profile-html.js";
import { avatarIconDisplay,navAvatarIconDisplay, uploadImage } from "./utils/passport-upload.js";


genProfileHTML();
profileController();
avatarIconDisplay();
navAvatarIconDisplay();
uploadImage();