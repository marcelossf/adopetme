import { RequestTable } from "./style";

export const TableRequest = () => {
	return (
		<RequestTable>
			<tr className="table-headers">
				<th>Nome pet</th>
				<th>Ong responsável</th>
				<th className="status"> status</th>
			</tr>
			<tr className="table-data">
				{/* ---estutura sem solicitação--- */}
				<td className="first">
					<span></span>Você ainda não fez nenhuma solicitação de
					adoção!
				</td>
			</tr>

			{/* ---estutura com solicitação--- */}

			{/* <tr className="table-data">
				<td className="first">
					<span></span>PitbullFofo
				</td>
				<td>LovePaws</td>
				<StatusRequest statusColor="aprovado">pendente</StatusRequest>
			</tr> */}
		</RequestTable>
	);
};
