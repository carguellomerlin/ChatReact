import React from 'react'

const ChatRoom = ({usuarios, messages}) => {
	<div>
		<div className='row'>
			<h3>Users Online</h3>
			{
				usuarios.map(usuario =>
				<li key={usuario.id}>{usuario.nombre}</li>
			)}
			<div>
				<div>
				{
					messages.map(message => 
					<li key={message.id}>{message.text}</li>
				)}
				</div>
			</div>
		</div>
	</div>
	}
export default ChatRoom;