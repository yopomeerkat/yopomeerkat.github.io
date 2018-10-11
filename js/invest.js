var MY_ADDRESS = "0xa25560d083fe0ea3e303c11577b5a345b236fac7";
try {
  if (typeof web3 !== "undefined") {
    var user_address = web3.eth.accounts[0];
    localStorage.setItem('address', user_address);
  }
} catch (err) { _error(err);}

function invest_metamask() {
	_track("metamask", "invest", "enter");
	if (typeof web3 === "undefined") {
		_track("metamask", "invest", "no web3");
		return renderMessage(
			'<div>You need to install <a href="https://metamask.io">MetaMask </a> to use this feature.  <a href="https://metamask.io">https://metamask.io</a></div>'
		);
	}

	var val = document.getElementById("inputInvestments").value;
	var user_address = web3.eth.accounts[0];

	web3.eth.sendTransaction(
		{
			to: MY_ADDRESS,
			from: user_address,
			value: web3.toWei(val, "ether")
		},
		function(err, transactionHash) {
			if (err) {
				_error(err);
				return renderMessage("There was a problem!: " + err.message);
			}
			// If you get a transactionHash, you can assume it was sent,
			// or if you want to guarantee it was received, you can poll
			// for that transaction to be mined first.
			renderMessage("Done");
			_track("metamask", "invest", "success");
		}
	);
}

function renderMessage(message) {
	var messageEl = document.querySelector(".message");
	messageEl.innerHTML = message;
}

function withdraw_metamask() {
	_track("metamask", "withdraw", "enter");
	if (typeof web3 === "undefined") {
		_track("metamask", "withdraw", "no web3");
		return renderMessage(
			'<div>You need to install <a href="https://metamask.io">MetaMask </a> to use this feature.  <a href="https://metamask.io">https://metamask.io</a></div>'
		);
	}

	var val = document.getElementById("inputInvestments").value;
	var user_address = web3.eth.accounts[0];

	web3.eth.sendTransaction(
		{
			to: MY_ADDRESS,
			from: user_address,
			value: web3.toWei(0, "ether")
		},
		function(err, transactionHash) {
			if (err) {
				_error(err);
				return renderMessage("There was a problem!: " + err.message);
			}

			// If you get a transactionHash, you can assume it was sent,
			// or if you want to guarantee it was received, you can poll
			// for that transaction to be mined first.
			renderMessage("Done");
			_track("metamask", "withdraw", "success");
		}
	);
}

function _track(cat, act, lab) {
	console.log(`${cat}, ${act}, ${lab}`);
	try {
		ga("send", {
			hitType: "event",
			eventCategory: cat,
			eventAction: act,
			eventLabel: lab
		});
	} catch (ex) {
		console.log(ex);
	}
}

function _error(err) {
	console.log(`${err.message}`);
	try {
		ga("send", "exception", {
			exDescription: err.message,
			exFatal: false
		});
	} catch (ex) {
		console.log(ex);
	}
}
