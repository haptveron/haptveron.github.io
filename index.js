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
function getCommitCount() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios.get('https://api.github.com/repos/haptveron/haptveron.github.io/commits', {
                headers: {
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
        const commitCountElement = document.getElementById('commit-count');
        if (commitCount !== null && commitCountElement) {
            commitCountElement.textContent = `Commit Count: ${commitCount}`;
        }
        else if (commitCountElement) {
            commitCountElement.textContent = 'Error fetching commit count';
        }
    });
}
displayCommitCount();
