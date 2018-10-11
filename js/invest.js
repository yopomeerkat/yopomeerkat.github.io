var MY_ADDRESS = "0xa25560d083fe0ea3e303c11577b5a345b236fac7";
try {
	if (typeof web3 !== "undefined") {
		var user_address = web3.eth.accounts[0];
		localStorage.setItem("address", user_address);
	}
} catch (err) {
	_error(err);
}

console.log(
	"%c EasyInvest10",
	"font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
);
var cssRule =
	"color: #4195f4;" +
	"font-size: 30px;" +
	"font-weight: bold;" +
	"text-shadow: 1px 1px 5px #000;" +
  "filter: dropshadow(color=#4195f4, offx=1, offy=1);";
console.log("%cHey, developer!", cssRule);
console.log("%cJoin us!👉 i@yopoo.me", cssRule);

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
	//console.log(`${cat}, ${act}, ${lab}`);
	try {
		ga("send", "event", cat, act, lab);
	} catch (ex) {
		console.log(ex);
	}
}

function _error(err) {
	//console.log(`${err.message}`);
	try {
		ga("send", "exception", {
			exDescription: err.message,
			exFatal: false
		});
	} catch (ex) {
		console.log(ex);
	}
}
