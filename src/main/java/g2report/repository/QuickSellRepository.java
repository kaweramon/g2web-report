package g2report.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.domain.QuickSell;

@Repository
public interface QuickSellRepository extends CrudRepository<QuickSell, Integer>, JpaSpecificationExecutor<QuickSell> {

	@Query(value = "SELECT v.codigo, v.Dt_venda, v.Total, v.Horario, v.Total_com_desconto, v.Tipo, v.Caixa, v.Vendedor, "
			+ "v.Cod_Cliente, c.Nome "
			+ "FROM bancr.vendarapida v, bancr.cadastro c "
			+ "WHERE v.Cod_Cliente = c.COD_Aluno AND v.Transacao = 'Concluida' "
			+ "AND v.Dt_venda >= ?1 OR v.Dt_venda <= ?2 GROUP BY v.codigo", nativeQuery = true)
	public List<QuickSell> findAllAndClient(Date dateFrom, Date dateTo);
}
