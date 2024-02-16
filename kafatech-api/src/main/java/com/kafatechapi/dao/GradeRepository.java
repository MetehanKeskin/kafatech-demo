package com.kafatechapi.dao;

import com.kafatechapi.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "grades", path = "grades")
public interface GradeRepository extends JpaRepository<Grade, Integer> {
    List<Grade> findAll();

    @Override
    void deleteById(Integer integer);

    @Override
    <S extends Grade> S save(S entity);
}
