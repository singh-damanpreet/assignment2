var plus = document.querySelector('.add');
plus.addEventListener("click", Add);
var list = document.querySelector('ul');
document.addEventListener("keydown", (event)=>
{
	if(event.keyCode === 13)
	{
		Add();
	}
});

function Add()
{
	let text = document.querySelector('.text');
	let textvalue = text.value;
	let div = document.createElement('DIV');
	div.classList.add('inline');
	div.innerHTML = `
					<button class="fas fa-trash" onclick="Delete(event)"></button>
					<button class="fas fa-arrow-up" onclick="Up(event)"></button>
					<button class="fas fa-arrow-down" onclick="Down(event)"></button>
					<li>${textvalue}</li>
					`;
	list.appendChild(div);
	text.value = ""
}

function Delete(event)
{
	list.removeChild(event.target.parentNode);
}
function Down(event)
{
	let e = event.target.parentNode;

	if(e.nextElementSibling!==null)
	{
		let next = e.nextElementSibling;
		let t = next.innerHTML;
		next.innerHTML = e.innerHTML;
		e.innerHTML = t;
		e = next;
	}


}
function Up(event)
{
	let e = event.target.parentNode;

	if(e.previousElementSibling!==null)
	{
		let prev = e.previousElementSibling;
		let t = prev.innerHTML;
		prev.innerHTML = e.innerHTML;
		e.innerHTML = t;
		e = prev;
	}
}
