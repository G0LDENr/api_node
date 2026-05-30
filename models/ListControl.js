class ListControl {
    constructor() {
        this.whitelist = [];
        this.blacklist = [];
    }

    addToWhitelist(userId) {
        const idString = userId.toString();
        if (!this.whitelist.includes(idString)) {
            this.whitelist.push(idString);
            return true;
        }
        return false;
    }

    addToBlacklist(userId) {
        const idString = userId.toString();
        if (!this.blacklist.includes(idString)) {
            this.blacklist.push(idString);
            return true;
        }
        return false;
    }

    isInWhitelist(userId) {
        return this.whitelist.includes(userId.toString());
    }

    isInBlacklist(userId) {
        return this.blacklist.includes(userId.toString());
    }

    getLists() {
        return {
            whitelist: this.whitelist,
            blacklist: this.blacklist
        };
    }
}

export default new ListControl();