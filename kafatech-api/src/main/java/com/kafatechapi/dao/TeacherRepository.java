package com.kafatechapi.dao;


import com.kafatechapi.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "teachers", path = "teachers")
public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
}
