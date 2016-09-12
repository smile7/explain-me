(function () {
    function EMGame(names, config) {
        this._config   = config || {
            turnTime: 30000,
        };
        this._teams    = [];
        this._words    = [];
        this._names    = names;
        this._activeId = 0;
        
        //this.addWords = function() {}
    }
    
    function shuffle(arr) {
        var j, x, i;
        
        for (i = arr.length;
             i;
             j = Math.floor(Math.random() * i),
             x = arr[--i], arr[i] = arr[j], arr[j] = x);
        
        return arr;
    }
    
    EMGame.prototype.addWords = function(words) {
        this._words = this._words.concat(words);
        
        return this;
    };
    
    EMGame.prototype.getWords = function() {
        return this._words;
    };

    EMGame.prototype.start = function() {
        var self    = this;
        
        this._teams = this.generateTeams();
        this._words = shuffle(this._words);
        
        this.startTurn(function() {
            self.setNextTeam();
            
        });
        
        return this;
    };
    
    EMGame.prototype.generateTeams = function() {
        var len, i, teams = [];
        
        if (this._config.randomTeams) {
            this._names = shuffle(this._names);
        }
        
        len = this._names.length / 2;
        
        for (i = 0; i < len; i++) {
            teams[i] = new EMTeam(
                this._names[i],
                this._names[i + 1]
            );
        }
        
        return teams;
    };
    
    EMGame.prototype.getActiveTeam = function() {
        return this._teams[this._activeId];        
    };
    
    
    EMGame.prototype.startTurn = function(callback) {
        //TODO
        var secs     = this._config.turnTime / 1000;
        var interval = setInterval(function() {
            
            
        }, 1000);
        
        setTimeout(function() {
            clearInterval(interval);
            callback();
        }, this._config.turnTime);
        
        return this;
    };
    
    function EMTeam(name1, name2) {
        this._players  = [new EMPlayer(name1), new EMPlayer(name2)];
        this._points   = 0;
        this._activeId = 0;
    }
    
    EMTeam.prototype.changeActiveId = function() {
        this._activeId = (this._activeId++) % 2;
        
        return this;
    }
    
    EMTeam.prototype.getActivePlayer = function() {
        return this._players[this._activeId];        
    };

    function EMPlayer(name) {
        this._name    = name;
        this._correct = [];
        this._wrong   = [];
    }
    
    EMPlayer.prototype.wrong = function(el) {
        this._wrong.push(el);
        
        return this;
    };
    
    EMPlayer.prototype.correct = function(el) {
        this._correct.push(el);
        
        return this;
    };

    window.EMGame = EMGame;

}());