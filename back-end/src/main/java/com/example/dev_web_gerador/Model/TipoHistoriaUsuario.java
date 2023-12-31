package com.example.dev_web_gerador.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.micrometer.common.lang.Nullable;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table
@Data
public class TipoHistoriaUsuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String descricao;


    @ManyToOne
    private TipoEpico tipo_epico;

    @OneToMany(mappedBy = "tipoHistoriaUsuario", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<HistoriaUsuario> historiaUsuario;

    @OneToMany(mappedBy = "tipoHistoriaUsuario", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<TipoTarefa> tipoTarefa;

    @ManyToOne
    @Nullable
    private TipoHistoriaUsuario tipoHistoriaUsuarioPai;

    @OneToMany(mappedBy = "tipoHistoriaUsuarioPai")
    @JsonIgnore
    private List<TipoHistoriaUsuario> tipoHistoriaUsuarioDependente;


}
