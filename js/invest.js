
var MY_ADDRESS = '0xa25560d083fe0ea3e303c11577b5a345b236fac7' 

function invest_metamask() {

  if (typeof web3 === 'undefined') {
    return renderMessage('<div>You need to install <a href="https://metamask.io">MetaMask </a> to use this feature.  <a href="https://metamask.io">https://metamask.io</a></div>')
  }
  
	var val = document.getElementById('inputInvestments').value;
	var user_address = web3.eth.accounts[0]

  web3.eth.sendTransaction({
    to: MY_ADDRESS,
    from: user_address,
    value: web3.toWei(val, 'ether'),
  }, function (err, transactionHash) {
    if (err) return renderMessage('There was a problem!: ' + err.message)

    // If you get a transactionHash, you can assume it was sent,
    // or if you want to guarantee it was received, you can poll
    // for that transaction to be mined first.
    renderMessage('Done')
  })
}

function renderMessage (message) {
  var messageEl = document.querySelector('.message')
  messageEl.innerHTML = message
}

function withdraw_metamask(){
  if (typeof web3 === 'undefined') {
    return renderMessage('<div>You need to install <a href="https://metamask.io">MetaMask </a> to use this feature.  <a href="https://metamask.io">https://metamask.io</a></div>')
  }
  
	var val = document.getElementById('inputInvestments').value;
	var user_address = web3.eth.accounts[0]

  web3.eth.sendTransaction({
    to: MY_ADDRESS,
    from: user_address,
    value: web3.toWei(0, 'ether'),
  }, function (err, transactionHash) {
    if (err) return renderMessage('There was a problem!: ' + err.message)

    // If you get a transactionHash, you can assume it was sent,
    // or if you want to guarantee it was received, you can poll
    // for that transaction to be mined first.
    renderMessage('Done')
  })
}