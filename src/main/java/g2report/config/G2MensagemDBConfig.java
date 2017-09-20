package g2report.config;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableAutoConfiguration
@EnableTransactionManagement
@EnableJpaRepositories(
  entityManagerFactoryRef = "g2MensagemEntityManagerFactory",
  transactionManagerRef = "g2MensagemTransactionManager",
  basePackages = { "g2report.g2mensagem.repository" }
)
public class G2MensagemDBConfig {
	
	@Bean(name = "g2MensagemDataSource")
	@ConfigurationProperties(prefix = "app.datasource.g2mensagem")
	public DataSource dataSource() {
		return DataSourceBuilder.create().build();
	}
	
	@Bean(name = "g2MensagemEntityManagerFactory")
	public LocalContainerEntityManagerFactoryBean barEntityManagerFactory(EntityManagerFactoryBuilder builder,
			@Qualifier("g2MensagemDataSource") DataSource dataSource) {
		return builder.dataSource(dataSource).packages("g2report.g2mensagem.domain").persistenceUnit("g2mensagem").build();
//		return builder.dataSource(dataSource).packages("g2report.g2mensagem.domain", "g2report.bancr.domain").build();
	}

	@Bean(name = "g2MensagemTransactionManager")
	public PlatformTransactionManager barTransactionManager(
			@Qualifier("g2MensagemEntityManagerFactory") EntityManagerFactory g2MensagemEntityManagerFactory) {
		return new JpaTransactionManager(g2MensagemEntityManagerFactory);
	}
	
}
