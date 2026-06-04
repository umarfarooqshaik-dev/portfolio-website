package com.portfolio.Repository;

import com.portfolio.Model.UserLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface LogRepo extends JpaRepository<UserLog, Long> {
    @Query(value = "SELECT * FROM user_log where username =:username and password=:password " ,nativeQuery = true)
    UserLog findByUsernameByPassword(@Param("username") String username, @Param("password") String password);

}
