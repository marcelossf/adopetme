import { CardRequest, CardSection } from "./style";

const StepsRequest = () => {
	return (
		<CardSection>
			<h4>
				<span>E agora?</span> Vamos entender os próximos passos:
			</h4>
			<div className="cards-container">
				<CardRequest type="pendente">
					<p className="status-title">Pendente?</p>
					<div className="status-text">
						<p>
							O seu formulário foi entregue para a ONG responsável
							pelo pet, agora é esperar eles revisarem as
							informações!
						</p>
					</div>
				</CardRequest>
				<CardRequest type="revisao">
					<p className="status-title">Em revisão?</p>
					<div className="status-text">
						<p>
							As suas informações estão sendo analisandas. Dentro
							dos próximos 3 dias você terá uma responsta.
						</p>
					</div>
				</CardRequest>
				<CardRequest type="aprovado">
					<p className="status-title">Aprovado?</p>
					<div className="status-text">
						<p>
							Parabens! sua adoção foi aprovada. A ONG deverá
							entrar em contato para acertarem a entrega do
							animalzinho.
						</p>
					</div>
				</CardRequest>
				<CardRequest type="negado">
					<p className="status-title">Negado?</p>
					<div className="status-text">
						<p>
							Que pena.. a sua adoção foi negada. Se quiser se
							informar o porque pode sempre entrar em contato com
							a ONG responsável!
						</p>
					</div>
				</CardRequest>
				<CardRequest type="entregue">
					<p className="status-title entregue">Entregue?</p>
					<div className="status-text">
						<p>
							Seu pet já está ai com você! Agora é só aproveitar
							essa nova companhia.
						</p>
					</div>
				</CardRequest>
			</div>
		</CardSection>
	);
};

export default StepsRequest;
