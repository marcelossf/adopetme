import { RequestTable, StatusRequest } from "./style";

export const TableRequest = () => {
	return (
		<RequestTable>
			<caption className="request-caption">Processo de adoção</caption>
			<tr className="table-headers">
				<th>Nome pet</th>
				<th>Ong responsável</th>
				<th className="status"> status</th>
			</tr>
			<tr className="table-data">
				<td className="first">
					<span></span>PitbullFofo
				</td>
				<td>LovePaws</td>
				<StatusRequest statusColor="aprovado">pendente</StatusRequest>
			</tr>
		</RequestTable>
	);
};
