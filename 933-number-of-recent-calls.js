const RecentCounter = function() {
    this.pings = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    if (t === null) return null;
    if (t > 3000) {
        let delta = t - 3000;
       while (this.pings.length > 0 && this.pings[0] < delta) {
            this.pings.shift();
        } 
    }
        
    this.pings.push(t);
    return this.pings.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */


// Another


/** 
 * @param {number} t
 * @return {number}
 */

 class RecentCounter {
    constructor() {
      this.requests = [];
    }
    
    ping(t) {
      this.requests.push(t);
      
      while(t - this.requests[0] > 3000) {
        this.requests.shift();
      }
      
      return this.requests.length;
    }
  }
  
  
/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
  
  