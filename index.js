"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getCommitCount() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('https://api.github.com/repos/USERNAME/REPO_NAME/commits', {
                headers: {
                    'Authorization': 'token YOUR_GITHUB_TOKEN',
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            return response.data.length;
        }
        catch (error) {
            console.error('Error fetching commit data:', error);
            return null;
        }
    });
}
function displayCommitCount() {
    return __awaiter(this, void 0, void 0, function* () {
        const commitCount = yield getCommitCount();
        if (commitCount !== null) {
            console.log(`Commit Count: ${commitCount}`);
        }
    });
}
displayCommitCount();
