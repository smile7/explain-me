$(document).ready(function() {
    var players = 0;
    var $playerBox = $('#l-player-names');
    var $points = $('#l-points');
    var playerNames = [];
    var $txt = $('#l-txt');
    var time = 30;
    var maxTurns = 12;
    var teams;
    var interval;
    var isRoundRunning = false;
    var bonus;
    var isMimics;

    $('input', $txt).on('click', function() {
      runRound();
    });

    $("#l-start").on('click', function(e) {
      $('input', $playerBox).each(function(i, el) {
        playerNames[i] = el.value;
      });

      startGame();
    });

    $("#l-players").on('change', function(e) {
      players = e.target.valueAsNumber;
      createPlayerNameBoxes();
    });

    function createPlayerNameBoxes() {
      var html = '';
      for (var i = 0; i < players; i++) {
        html += '<input type="text" placeholder="Играч ' + (i + 1) + '" />';
      }

      $playerBox.html(html);
    }

    function shuffle(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }

    function startGame() {
      $('#l-settings').fadeOut('slow');

      createTeams();
      updatePoints();
      $points.fadeIn();

      isMimics = false;
      bonus = 1;
      currentTurn = 0;
      currentTeamId = 0;

      $.get('db.txt', function(r) {
        questions = shuffle(r.split(','));
        console.log(questions.length, questions);

        showTxt();
      });


      $(document).on('keydown', function(evt) {
        if (!isRoundRunning) { return; }

        var team = teams[currentTeamId];


        if (evt.key === 'Escape') {
          team.passes++;
          if (team.passes % 3 === 0) {
            team.points--;
          }

          loadNextQuestion();
          //pass
        } else if (evt.key === ' ') {
          team.points += bonus;

          loadNextQuestion();
        }

      });

    }

    function loadNextQuestion() {
      var word = questions.pop().replace(/\n/g, '').toUpperCase();


      updatePoints();

      if (!!word) {
        //show it

        $('#l-word').html(word);
      } else {
        isRoundRunning = false;

        gameOver();
      }
    }

    function gameOver() {
      alert('край на играта');
      $('#l-game').fadeOut();
      //no more words
    }

    function showTxt() {
      $txt.fadeIn();

    }

    function runRound() {
      var $cnt = $('#l-round');

      $txt.fadeOut();

      $cnt.fadeIn();

      isRoundRunning = true;


      $('#l-info').html('На ход е ' +
        teams[currentTeamId].players[currentTurn % 2]);

      setTimeout(function() {
        isRoundRunning = false;
        hideTimer();
        $cnt.fadeOut();
        $txt.fadeIn();

        $('input', $txt).blur();

        currentTeamId = (currentTeamId + 1) % teams.length;
        $('#l-info').html('На ход е ' +
          teams[currentTeamId].players[currentTurn % 2]);

        if (currentTeamId === 0) {
          currentTurn++;
        }

        if (currentTurn === maxTurns / 2 && !isMimics) {
          bonus = 2;
          isMimics = true;
          alert('От сега нататък - с мимики')
        }

        if (currentTurn === maxTurns) {
          gameOver();
        }

      }, time * 1000);

      showTimer();
      loadNextQuestion();

    }

    function hideTimer() {
      clearInterval(interval);

      $('#l-timer').fadeOut();
    }

    function showTimer() {
      var secs = time;
      interval = setInterval(function() {

        $('#l-timer').html(--secs);

      }, 1000);

      $('#l-timer').fadeIn().html(secs);
    }

    function updatePoints() {
      var html = '';

      for (var i = 0; i < teams.length; i++) {
        html += '<p>' +
          teams[i].players.join(" & ") +
          '<br /> Точки: ' + teams[i].points +
          '</p>';
      }

      $points.html(html);
    }

    function createTeams() {
      shuffle(playerNames);
      teams = [];

      for (var i = 0; i < players; i += 2) {
        teams.push({
          points: 0,
          players: [
            playerNames[i],
            playerNames[i + 1],
          ],
          passes: 0,
          id: 0,
        });
      }
    }

});